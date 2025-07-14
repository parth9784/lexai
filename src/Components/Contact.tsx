import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
    return (
        <section className="bg-white py-20 px-6 manrope-500">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left - Contact Info */}
                <div>
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
                    </p>

                    <ul className="space-y-6 text-gray-700 text-lg">
                        <li className="flex items-center space-x-4">
                            <FiPhone className="text-blue-600 text-2xl" />
                            <span>484.324.2400</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FiMail className="text-blue-600 text-2xl" />
                            <span>info@lexai.com</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FiMapPin className="text-blue-600 text-2xl" />
                            <span>15 West 3rd St. Media, Pa. 19063</span>
                        </li>
                    </ul>
                </div>

                {/* Right - Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="First"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Last"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                        <input
                            type="tel"
                            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="xxx-xxx-xxxx"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message ..."
                        ></textarea>
                    </div>

                    <div>

                        <button
                            type="submit"
                            className="bg-[#dca12b] hover:bg-[#b6821b] border-black border-1 text-white font-medium px-5 py-2 rounded-md transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
