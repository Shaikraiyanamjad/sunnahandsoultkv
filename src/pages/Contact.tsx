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
              <div className="max-w-3xl mx-auto text-center px-2 sm:px-0">
                <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Get in Touch
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-primary">
                  Contact Us
                </h1>

                <div className="gold-divider mb-6" />

                <p className="text-muted-foreground text-base sm:text-lg">
                  We'd love to hear from you. Reach out with any questions about our products.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-background">
            <div className="container-custom bg-card bg-primary rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Contact Form */}
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 text-primary">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-card"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 text-primary">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-card"
                          placeholder="your@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 text-primary">
                        Subject
                      </label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="bg-card"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 text-primary">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="bg-card min-h-[140px] sm:min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
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
                    {/* Email */}
                    <a
                      href="mailto:hello@sunnahandsoul.com"
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-primary">Email Us</p>
                        <p className="text-muted-foreground text-sm break-all">
                          hello@sunnahandsoul.com
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/9086677554"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-primary">WhatsApp</p>
                        <p className="text-muted-foreground text-sm">
                          Chat with us directly
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+919086677554"
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-primary">Call Us</p>
                        <p className="text-muted-foreground text-sm">
                          +91 9086677554
                        </p>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/sunnah.soul.tkv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-primary">Instagram</p>
                        <p className="text-muted-foreground text-sm">
                          @sunnah.soul.tkv
                        </p>
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
