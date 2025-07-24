import JSZip from "jszip";
import * as asn1js from "asn1js";
import { Certificate } from "pkijs";

/**
 * Verifies the APK signature by checking META-INF/*.RSA or *.DSA and parsing the certificate.
 * Only works for v1-signed APKs.
 *
 * @param {File} file - The APK file object
 * @returns {Promise<{ issuer: string, fingerprint: string, method: string }>} - Signature info if valid
 */
export async function verifyApkSignature(file) {
  if (!file || !file.name.endsWith(".apk")) {
    throw new Error("Please upload a valid .apk file");
  }

  const zip = await JSZip.loadAsync(file);

  const certFileEntry = Object.values(zip.files).find((entry) =>
    entry.name.match(/^META-INF\/.*\.(RSA|DSA)$/i)
  );

  if (!certFileEntry) {
    throw new Error(
      "No .RSA or .DSA signature found. APK may use a newer signing scheme (v2/v3) not supported in-browser."
    );
  }

  const certData = await certFileEntry.async("uint8array");
  const asn1 = asn1js.fromBER(certData.buffer);

  if (asn1.offset === -1) {
    throw new Error("Failed to parse ASN.1 structure in certificate");
  }

  let certificate;
  try {
    certificate = new Certificate({ schema: asn1.result });
  } catch (err) {
    throw new Error("Failed to parse certificate from RSA block");
  }

  const fingerprintHex = Buffer.from(
    new Uint8Array(
      certificate.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex
    )
  ).toString("hex");

  const issuer = certificate.issuer.typesAndValues
    .map((tv) => `${tv.type.split(".").pop()}: ${tv.value.valueBlock.value}`)
    .join(", ");

  return {
    issuer,
    fingerprint: fingerprintHex,
    method: "v1 (JAR Signature via META-INF)",
  };
}
