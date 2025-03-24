import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, CheckIcon, RefreshCwIcon } from "lucide-react";

const NeonBackground = () => {
  return (
    <>
      {/* Animated Background Layers */}
      <motion.div
        className="fixed inset-0 bg-indigo-950 z-0"
        initial={{ opacity: 0.7 }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
          background: [
            "linear-gradient(45deg, rgba(67,56,202,0.2), rgba(55,48,163,0.2))",
            "linear-gradient(135deg, rgba(55,48,163,0.3), rgba(67,56,202,0.3))",
            "linear-gradient(225deg, rgba(79,70,229,0.2), rgba(55,48,163,0.2))",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Rest of the background animation remains the same */}
    </>
  );
};

const Home = ({
  completed,
  inCompleted,
  input,
  setCurrInput,
  inputRef,
  handleTasks,
  completeTask,
  inCompletedTask,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-6">
      {/* Neon Background Animation */}
      <NeonBackground />

      <div className="relative z-20 w-full max-w-md bg-indigo-900/30 backdrop-blur-lg border border-indigo-700/30 text-white p-6 rounded-2xl shadow-2xl flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
          Task Manager
        </h2>

        {/* Input Section */}
        <div className="flex space-x-2 mb-6">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setCurrInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleTasks()}
            placeholder="Enter your next task"
            className="flex-1 px-4 py-3 rounded-lg bg-indigo-800/50 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          />
          <button
            onClick={handleTasks}
            className="p-3 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 rounded-lg shadow-lg transform active:scale-95 transition duration-200"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Tasks Container with Scrollable Sections */}
        <div className="flex flex-col space-y-6 overflow-hidden">
          {/* Incomplete Tasks Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span>Pending Tasks</span>
            </h3>
            <div className="max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-indigo-900/30">
              <AnimatePresence>
                {inCompleted.map((task, idx) => (
                  <motion.div
                    key={`incomplete-${idx}`}
                    className="flex items-center bg-indigo-800/30 hover:bg-indigo-800/50 rounded-lg p-3 mb-2 transition duration-300 group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                  >
                    <div
                      onClick={() => completeTask(idx)}
                      className="flex-1 cursor-pointer flex items-center space-x-2"
                    >
                      <RefreshCwIcon className="w-4 h-4 text-indigo-400 mr-2" />
                      {task}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Completed Tasks Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Completed Tasks</span>
            </h3>
            <div className="max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-purple-900/30">
              {" "}
              <AnimatePresence>
                {completed.map((task, idx) => (
                  <motion.div
                    key={`completed-${idx}`}
                    className="flex items-center bg-purple-800/30 hover:bg-purple-800/50 rounded-lg p-3 mb-2 transition duration-300 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div
                      onClick={() => inCompletedTask(idx)}
                      className="flex-1 line-through text-purple-300 cursor-pointer flex items-center space-x-2"
                    >
                      <CheckIcon className="w-4 h-4 text-purple-400 mr-2" />
                      {task}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
