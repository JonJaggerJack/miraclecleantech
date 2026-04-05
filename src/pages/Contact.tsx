import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'miraclecleantech@gmail.com', color: 'bg-blue-700' },
  { icon: Phone, label: 'Téléphone', value: '+243850714774', color: 'bg-green-600' },
  { icon: MapPin, label: 'Localisation', value: 'Bukavu', color: 'bg-violet-600' },
];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'Le nom est requis';
  if (!data.email.trim()) {
    errors.email = 'L\'email est requis';
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Email invalide';
  }
  if (!data.subject.trim()) errors.subject = 'Le sujet est requis';
  if (!data.message.trim()) errors.message = 'Le message est requis';
  else if (data.message.trim().length < 20) errors.message = 'Le message doit faire au moins 20 caractères';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent ${
      errors[field] ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
    }`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            Contactez-nous
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Nous{' '}
            <span className="text-blue-700">
              écrire
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Pour toute demande d'information, de partenariat ou relative aux produits, utilisez le formulaire ou les coordonnées ci-dessous.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coordonnées</h2>
              <p className="text-gray-500 text-sm">Vous pouvez nous joindre via le formulaire ou utiliser directement les coordonnées ci-dessous.</p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-gray-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center h-52 mt-2">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500 font-medium">Bukavu</p>
                <p className="text-xs text-gray-400">Localisation communiquée par l'organisation.</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Merci de nous avoir contactés. Votre message a bien été pris en compte.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nom complet *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Sujet *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass('subject')}
                      >
                        <option value="">Choisir un sujet</option>
                        <option>Demande d'information</option>
                        <option>Produits d'hygiène des mains</option>
                        <option>Produits de nettoyage des sols</option>
                        <option>Formation professionnelle</option>
                        <option>Partenariat</option>
                        <option>Soutien à la mission</option>
                        <option>Autre</option>
                      </select>
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre demande..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
