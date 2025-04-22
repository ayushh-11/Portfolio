import { motion } from 'framer-motion';
import { FiInstagram, FiCamera, FiArrowDownRight } from 'react-icons/fi';
import { CiFacebook } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden"
            >
                {/* Floating background elements */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-32 -right-32 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl"
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-8 relative z-10">
                            <motion.div
                                initial={{ x: -20 }}
                                animate={{ x: 0 }}
                                className="inline-flex items-center gap-3 text-indigo-600 mb-4"
                            >
                                <FiCamera className="text-2xl" />
                                <span className="font-medium">Photography Artist</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                            >
                                Capturing Moments<br />
                                Through My Lens
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600 max-w-2xl"
                            >
                                Hi, I'm <span className="font-semibold text-indigo-600">Suman Neupane</span> -
                                A visual storyteller passionate about freezing time through breathtaking imagery.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4 items-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                                >
                                    <FiArrowDownRight className="text-xl" />
                                    <span className="text-lg font-medium">Explore Portfolio</span>
                                </motion.button>

                                <a href="https://www.instagram.com/suman_neupanee/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                                    <FiInstagram className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
                                </a>
                                <a href="https://www.facebook.com/suman.neupane22" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                                    <CiFacebook className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0, rotate: -15 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
                            className="lg:w-1/2 relative flex justify-center"
                        >
                            <div className="relative w-96 h-96">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-[4rem] transform rotate-6 shadow-xl" />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-full h-full rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl"
                                >
                                    <img
                                        src="image.png"
                                        alt="Suman Neupane"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full animate-bounce" />
                    <span className="text-sm text-gray-600">Scroll down</span>
                </motion.div>
            </motion.div>
            {/* Sample Works Section */}
            <section className="mt-32 px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
                    Sample Works
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
                    >
                        <img src="/1.jpg" alt="Pokhara Lakeside" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800">Graduation Ceremony</h3>
                            <p className="text-sm text-gray-500">Canon EOS R6</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
                    >
                        <img src="/2.jpg" alt="Bhaktapur Durbar Square" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800">Pre Wedding Shot</h3>
                            <p className="text-sm text-gray-500">Nikon D850</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
                    >
                        <img src="/3.jpg" alt="Rara Lake" className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800">Family Get-Together</h3>
                            <p className="text-sm text-gray-500">Nikon D50</p>
                        </div>
                    </motion.div>
                </div>
                {/* View More Button */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="flex justify-center mt-16"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                          >
                            <NavLink to="/projects" className="text-lg font-medium">View Full Portfolio</NavLink>
                          </motion.button>
                        </motion.div>
            </section>
        </>

    );
};

export default Home;