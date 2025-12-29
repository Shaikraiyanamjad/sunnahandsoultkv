import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sunnah & Soul - Get in Touch</title>
        <meta 
          name="description" 
          content="Have questions about our products? Contact Sunnah & Soul via email, WhatsApp, or our contact form. We're here to help." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Get in Touch
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Contact Us
                </h1>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground text-lg">
                  We'd love to hear from you. Reach out with any questions about our products.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-card"
                          placeholder="your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-card"
                          placeholder="your@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-card"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-card min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <Button type="submit" variant="gold" size="lg">
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Other Ways to Reach Us
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="mailto:hello@sunnahandsoul.com"
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-muted-foreground text-sm">hello@sunnahandsoul.com</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/9086677554"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-muted-foreground text-sm">Chat with us directly</p>
                      </div>
                    </a>

                    <a
                      href="tel:+9086677554"
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Call Us</p>
                        <p className="text-muted-foreground text-sm">+91 9086677554</p>
                      </div>
                    </a>

                    <a
                      href="https://instagram.com/sunnahandsoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Instagram</p>
                        <p className="text-muted-foreground text-sm">@sunnahandsoul</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;