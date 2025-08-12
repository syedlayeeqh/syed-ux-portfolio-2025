import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Alex Design. All rights reserved.
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;