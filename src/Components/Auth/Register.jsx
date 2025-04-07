import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Logo from '../../assets/defcommlogo.png';

export default function BecomeMember() {
  const [activeTab, setActiveTab] = useState('individual');
  const [showForm, setShowForm] = useState(false);

return (
    <div className="min-h-screen bg-[#36460A] text-white px-4 py-12 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">
            {activeTab === 'individual' ? 'Become a member' : 'Enrolling your organisation'}
        </h1>
        <p className="max-w-2xl text-center text-sm mb-8">
            Becoming a developer for Defcomm Encrypted Solutions involves a structured process to ensure
            developers understand the platform, access necessary tools, and can build secure and
            innovative applications. Here’s a step-by-step walkthrough:
        </p>

        {/* Tabs */}
        <div className="w-full max-w-3xl border-t border-b border-[#8E9C40] mb-8">
            <div className="flex">
                <button
                    onClick={() => {
                        setActiveTab('individual');
                        setShowForm(false);
                    }}
                    className={`flex-1 text-center py-3 font-medium ${
                        activeTab === 'individual'
                            ? 'text-[#D1FF00] border-b-2 border-[#D1FF00]'
                            : 'text-white'
                    }`}
                >
                    Enrolling as an individual
                </button>
                <button
                    onClick={() => {
                        setActiveTab('organization');
                        setShowForm(false);
                    }}
                    className={`flex-1 text-center py-3 font-medium ${
                        activeTab === 'organization'
                            ? 'text-[#D1FF00] border-b-2 border-[#D1FF00]'
                            : 'text-white'
                    }`}
                >
                    Enrolling your organization
                </button>
            </div>
        </div>

        {/* Individual Content */}
        {activeTab === 'individual' && !showForm && (
            <div className="max-w-2xl space-y-6 text-sm">
                <p>
                    If you are an individual or a sole proprietor/single-person business, you must have a
                    Defcomm Account with two-factor authentication enabled and be of legal age*. Ensure that
                    you use your legal name in the first and last name fields of your Apple Account. Using
                    an alias, nickname, or company name may delay your enrolment approval.
                </p>

                <div>
                    <p className="text-[#D1FF00] font-semibold mb-1">Verification Process</p>
                    <p>During enrollment, Apple will confirm the following:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>
                            <strong>Legal Name:</strong> Your full legal name is required to enter into
                            agreements with Apple. This name will also appear as the seller name for your apps
                            on the App Store.
                        </li>
                        <li>
                            <strong>Contact Information:</strong> You must provide a valid email, phone number,
                            and physical address. P.O. boxes are not accepted.
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-md mt-4"
                >
                    ENROLL NOW
                    <span className="bg-[#D1FF00] p-1 rounded-full">
                        <BsArrowRight size={16} className="text-black" />
                    </span>
                </button>
            </div>
        )}

        {/* Organization Content */}
        {activeTab === 'organization' && !showForm && (
            <div className="max-w-2xl space-y-6 text-sm">
                <p>
                    To enroll your organization in the Defcomm Developer Program, you must have an Defcomm
                    Account with two-factor authentication enabled. We recommend using your organization’s
                    email address for your Defcomm Account. Additionally, ensure that your first and last
                    names match your legal name—using an alias, nickname, or company name may delay your
                    enrollment approval.
                </p>

                <div>
                    <p className="text-[#D1FF00] font-semibold mb-1">Verification Process</p>
                    <p>During enrollment, Apple will verify the following:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>
                            <strong>Legal Binding Authority:</strong> You must be able to bind your organization to agreements.
                        </li>
                        <li>
                            <strong>Legal Entity Name and Status:</strong> Must be a registered entity eligible for contracts.
                        </li>
                        <li>
                            <strong>License DPCOs No:</strong> Required for government organizations.
                        </li>
                        <li>
                            <strong>Phone and Email:</strong> Must be associated with your organization’s domain.
                        </li>
                        <li>
                            <strong>Website:</strong> A publicly accessible domain is required.
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-md mt-4"
                >
                    ENROLL NOW
                    <span className="bg-[#D1FF00] p-1 rounded-full">
                        <BsArrowRight size={16} className="text-black" />
                    </span>
                </button>
            </div>
        )}

        {/* Individual Form */}
        {activeTab === 'individual' && showForm && (
            <div className="bg-white text-black p-8 rounded-md shadow-lg w-full max-w-md">
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        )}

        {/* Organization Form */}
        {activeTab === 'organization' && showForm && (
            <div className="bg-white text-black p-8 rounded-md shadow-lg w-full max-w-md">
                <form>
                 <div className="flex space-x-6">
                 <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your last name"
                        />
                    </div>
                 </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-medium mb-1">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your country"
                        />
                    </div>
                    
                     <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="male" className="mr-2" />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="female" className="mr-2" />
                                Female
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="birthday" className="block text-sm font-medium mb-1">
                            Birthday
                        </label>
                        <input
                            type="date"
                            id="birthday"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                        <small>Let us know about your birthday so as not to miss a gift</small>
                    </div>
                    <div className="mb-4">
                       
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Country Tel
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Verify With</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="verify" value="text" />
                                Text Message
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="verify" value="email" />
                                Email
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
                    >
                        Continue
                    </button>
                </form>
            </div>
        )}
    </div>
);
}