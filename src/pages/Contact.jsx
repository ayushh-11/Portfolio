import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden py-24"
        >
            {/* Floating background elements */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-32 -right-32 w-6 h-64 bg-purple-100/30 rounded-full blur-2xl"
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-[250px_1fr]"  
                >
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-gradient-to-br from-indigo-600 to-purple-600 py-10 flex flex-col items-center text-white gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="#"
                                className="flex flex-row items-center gap-2 text-white"
                            >
                                <FiLinkedin className="text-2xl" />
                                <a href="https://www.linkedin.com/in/suman-neupane-434221218/" className="text-sm">@suman</a>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="#"
                                className="flex flex-row items-center gap-2 text-white"
                            >
                                <FaInstagram className="text-2xl" />
                                <a href="https://www.instagram.com/suman_neupanee/" className="text-sm">@suman</a>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="#"
                                className="flex flex-row items-center gap-2 text-white"
                            >
                                <FaFacebookF className="text-2xl" />
                                <a href="https://www.facebook.com/suman.neupane22" className="text-sm">/suman.fb</a>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="mailto:suman@example.com"
                                className="flex flex-row items-center gap-2 text-white"
                            >
                                <FiMail className="text-2xl" />
                                <span className="text-sm">sumanneupane366gmail.com</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="p-8 bg-white"
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-8">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="Enter your name"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="your@email.com"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="Write your message..."
                                ></textarea>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <FiSend className="text-xl" />
                                    <span className="font-medium">Send Message</span>
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
