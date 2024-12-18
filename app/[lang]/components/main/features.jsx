import React from 'react';
import { motion } from 'framer-motion';

const Features = ({botImg,title,description,Img2}) => {

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0 }}
            className="mb-24"

        >
            <div className="flex flex-col md:flex-row items-center justify-center">
                
                <motion.div
                    initial={{ scale: 1, y: 100 }}
                    animate={{ scale: 1, y: 0}}
                    exit={{ scale: 0, x: 1000 }}
                    transition={{ delay: 0, type: 'spring', stiffness: 100 }}
                >
                <img 
                    alt="Discord Bot"
                    src={botImg}
                    className="w-4/6 lg:w-3/12 md:w-3/12 ml-72"
                />
             
                </motion.div>

           
            </div>
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 }}
                    className="divider"
                >
                </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  mt-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4 ">
                       {title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                        {description}
                    </p>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 100 }}
                >
                    <img
                        src={Img2}
                        alt="Discord Bot"
                        className="rounded-lg shadow-2xl hidden md:block lg:block"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Features;