import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Terminal, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(''); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const sendEmail = (e: any ) => {
    e.preventDefault();
    
    if (!form.current) {
        console.log("Form not found");
        return;
    }

    setStatus('sending');

    emailjs
      .sendForm(
        'service_bc8xfgw',
        'template_ghg0328',
        form.current, 
        'PBeAjq3ECmXn0gkvt'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ravidilshan419@gmail.com',
      href: 'mailto:ravidilshan419@gmail.com', 
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 2284210',
      href: 'tel:+94762284210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Homagama, Sri Lanka',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Let's build something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30">
                  <Terminal className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/30 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Available for Opportunities</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently open to new opportunities in Network Engineering, Full Stack Development, and DevOps roles. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono text-sm">online</span>
              </div>
              <span className="text-gray-400 font-mono text-sm">~/contact $</span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  <span className="text-violet-400">$</span> name
                </label>
                <input
                  type="text"
                  name="user_name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white font-mono focus:border-violet-500/50 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  <span className="text-cyan-400">$</span> email
                </label>
                <input
                  type="email"
                  name="user_email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white font-mono focus:border-cyan-500/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  <span className="text-violet-400">$</span> message
                </label>
                <textarea
                  name="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-white font-mono focus:border-violet-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-mono font-medium flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <XCircle className="w-5 h-5" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <Terminal className="w-5 h-5" />
                    Execute Send
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-gray-500 text-sm font-mono text-center">
                <span className="text-green-400">✓</span> Message will be processed securely
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;