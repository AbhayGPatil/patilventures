import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const assessmentSteps = [
  {
    step: 1,
    question: 'What stage is your business at?',
    options: ['New to AI', 'Startup', 'Growing Business', 'Enterprise'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    step: 2,
    question: 'What are your main pain points?',
    options: ['Manual Processes', 'Data Overload', 'Poor Decision Making', 'Customer Service'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: 3,
    question: 'What\'s your timeline?',
    options: ['ASAP (1-2 weeks)', 'Short-term (1-3 months)', 'Medium-term (3-6 months)', 'Long-term (6+ months)'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: 4,
    question: 'What\'s your budget range?',
    options: ['< Rs.50K', 'Rs.50K - Rs.150K', 'Rs.150K - Rs.500K', 'Rs.500K+'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (showCalendly) {
      // Load Calendly script when modal opens
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCalendly]);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentStep]: answer });
    
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
  };

  return (
    <div className="min-h-screen bg-base text-primary">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {!completed ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                  Find Your <span className="text-highlight">AI Starting Point</span>
                </h1>
                <p className="text-xl text-primaryLight">
                  Answer a few questions to get personalized recommendations
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-highlight font-bold">Step {currentStep + 1} of {assessmentSteps.length}</span>
                  <span className="text-primaryLight/70">{Math.round(((currentStep + 1) / assessmentSteps.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentStep + 1) / assessmentSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-highlight"
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-surface border border-secondary rounded-2xl p-12 shadow-medium"
              >
                <div className="text-highlight mb-6">{assessmentSteps[currentStep].icon}</div>
                <h2 className="text-3xl font-bold mb-10">{assessmentSteps[currentStep].question}</h2>

                <div className="grid gap-4">
                  {assessmentSteps[currentStep].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 10 }}
                      onClick={() => handleAnswer(option)}
                      className="p-5 text-left rounded-2xl border-2 border-secondary hover:border-highlight bg-base/60 hover:bg-base/80 transition-all duration-200 font-semibold text-primaryLight hover:text-highlight"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-highlight mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 2-2-2m0 0l2-2 2 2m-2-2v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 7l1.5 12.5A2 2 0 007.5 21h9a2 2 0 002-1.5L20 7" />
                </svg>
              </div>
              <h1 className="text-5xl font-bold mb-4">Assessment Complete!</h1>
              <p className="text-xl text-primaryLight mb-8">
                Thank you for completing the assessment. We'll analyze your responses and send personalized recommendations.
              </p>

              <div className="bg-surface border border-secondary rounded-2xl p-12 mb-8 shadow-medium">
                <h2 className="text-2xl font-bold mb-6 text-highlight">Your Answers</h2>
                <div className="space-y-3">
                  {assessmentSteps.map((step, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-base/60 rounded-xl border border-secondary">
                      <span className="font-semibold">{step.question}</span>
                      <span className="text-highlight font-bold">{answers[idx] || 'Not answered'}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetAssessment}
                  className="px-8 py-3 border-2 border-primaryLight text-primary font-bold rounded-full hover:border-highlight hover:text-highlight transition-all duration-200"
                >
                  Retake Assessment
                </button>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="px-8 py-3 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200 text-white"
                >
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Calendly Booking Modal */}
      {showCalendly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCalendly(false)}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden border border-secondary/50"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-secondary/30 bg-gradient-to-r from-highlight/5 to-transparent">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Schedule Consultation</h2>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-primaryLight hover:text-highlight transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="p-4 sm:p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/team-patilventure/1-1-consult"
                style={{ minWidth: '100%', height: '600px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
