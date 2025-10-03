import { Zap, Copy, Check, MessageCircle, Send } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { CONTACT_INFO } from "@/constants/contact";

const Footer = () => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <footer className="footer-app border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-ksbistra text-primary-foreground">SOLARM Tech</span>
            </div>
            <p className="muted-text max-w-md">
              Помогаем технологиям помогать бизнесу.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-roboto-medium text-primary-foreground mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="transition-colors">Корпоративные системы</a></li>
              <li><a href="#" className="transition-colors">Консалтинг</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-roboto-medium text-primary-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex gap-5 items-center justify-start group">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-ksbistra muted-text hover:text-primary-foreground transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.email)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary-foreground/10 rounded"
                  >
                    {isCopied(CONTACT_INFO.email) ? (
                      <Check className="w-3 h-3 text-white" />
                    ) : (
                      <Copy className="w-3 h-3 text-white/60 hover:text-white" />
                    )}
                  </button>
                </div>
              </li>
              <li>
                <div className="flex gap-3 items-center justify-start group">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-ksbistra muted-text hover:text-primary-foreground transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.phone)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary-foreground/10 rounded"
                  >
                    {isCopied(CONTACT_INFO.phone) ? (
                      <Check className="w-3 h-3 text-white" />
                    ) : (
                      <Copy className="w-3 h-3 text-white/60 hover:text-white" />
                    )}
                  </button>
                </div>
              </li>
            </ul>

                    {/* Messengers */}
                    <div className="flex items-center gap-3 mt-6">
                      <a
                        href={CONTACT_INFO.messengers.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <a
                        href={CONTACT_INFO.messengers.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                        title="Telegram"
                      >
                        <Send className="w-4 h-4" />
                      </a>
                    </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-ksbistra muted-text">
            © 2025 SOLARM Tech. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;