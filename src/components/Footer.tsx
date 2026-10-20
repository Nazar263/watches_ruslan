import Image from 'next/image';
import HalftoneWordmarkFooter, { type FooterColumn } from '@/components/ui/halftone-wordmark-footer';

const footerColumns: FooterColumn[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Catalog', href: '#catalog' },
      { label: 'Craftsmanship', href: '#about' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Delivery', href: '#delivery' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacts', href: '#contacts' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/18602054435', target: '_blank', rel: 'noopener noreferrer' },
      { label: 'Instagram', href: 'https://www.instagram.com/ruslanaviation', target: '_blank', rel: 'noopener noreferrer' },
      { label: 'Facebook', href: 'https://www.facebook.com/share/g/1Bgu7mx7YP/?mibextid=wwXIfr', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <HalftoneWordmarkFooter
        wordmark="ruslan"
        label="RUSLAN AVIATION"
        meta="Precision in motion · Est. 2022"
        brandMark={
          <span className="hwf-brand-mark-badge">
            <Image
              src="/images/logo-na-prozoromu-1.png"
              alt=""
              width={44}
              height={24}
              className="h-6 w-11 object-contain"
            />
          </span>
        }
        columns={footerColumns}
        palette={{ background: '#06271B', ink: '#F4F0E5', warm: '#57C785' }}
        backgroundImage="radial-gradient(ellipse at 52% 112%, rgba(21, 112, 70, 0.78) 0%, transparent 54%), radial-gradient(ellipse at 84% 9%, rgba(11, 82, 53, 0.76) 0%, transparent 43%), linear-gradient(145deg, #041A12 0%, #073822 52%, #041A12 100%)"
        dotGap={6.5}
        radius={72}
        grain={0.28}
        crop={0.22}
        mobileWordmarkLift={0}
        height="clamp(500px, 46vw, 600px)"
        legal={
          <>
            <span className="hwf-legal-copy">&copy; {new Date().getFullYear()} Ruslan Aviation. All rights reserved.</span>
            <span>
              Developed by{' '}
              <a href="https://freelance-ua.agency" target="_blank" rel="noopener noreferrer">
                Freelance UA || Digital Agency
              </a>
            </span>
          </>
        }
      />
    </footer>
  );
}
