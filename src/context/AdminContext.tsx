import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TierPrice {
  tier: string;
  discount: string;
  schoolioMobyMax: string;
  ged: string;
}

interface SiteContent {
  brandName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  email: string;
  whatsapp: string;
  address: string;
  products: {
    schoolio: { name: string; description: string; price: string; priceUnit: string };
    mobymax: { name: string; description: string; price: string; priceUnit: string };
    ged: { name: string; description: string; price: string; priceUnit: string };
  };
  institutionTiers: TierPrice[];
}

const defaultTiers: TierPrice[] = [
  { tier: '1–19 siswa', discount: '-', schoolioMobyMax: 'Rp 870.000', ged: 'Rp 1.159.200' },
  { tier: '20–49 siswa', discount: '10%', schoolioMobyMax: 'Rp 783.000', ged: 'Rp 1.043.300' },
  { tier: '50–99 siswa', discount: '15%', schoolioMobyMax: 'Rp 739.500', ged: 'Rp 985.300' },
  { tier: '100–199 siswa', discount: '20%', schoolioMobyMax: 'Rp 696.000', ged: 'Rp 927.400' },
  { tier: '200+ siswa', discount: '25%', schoolioMobyMax: 'Rp 652.500', ged: 'Rp 869.400' },
];

const defaultContent: SiteContent = {
  brandName: 'Study Buddy',
  tagline: 'where learning meets technology',
  heroTitle: 'Upgrade Program Sekolah Anda dengan Platform Belajar Digital Bertaraf Internasional',
  heroSubtitle: 'Study Buddy membantu sekolah dan lembaga kursus menyediakan LMS dengan rapor & ijazah internasional — hemat hingga 80% biaya dibanding sekolah internasional.',
  heroBadge: '🎓 Where Learning Meets Technology',
  email: 'studybuddyindonesia1@gmail.com',
  whatsapp: '62881037380330',
  address: 'Jl. Nuasa Utama Raya No. 257, Jimbaran, Kuta Selatan - Badung',
  products: {
    schoolio: { name: 'Schoolio', description: 'Kurikulum lengkap untuk homeschool & sekolah', price: 'IDR 655.200', priceUnit: '/bulan/siswa' },
    mobymax: { name: 'MobyMax', description: 'Persiapan akademik bertaraf internasional', price: 'IDR 655.200', priceUnit: '/bulan/siswa' },
    ged: { name: 'GED', description: 'Ijazah SMA setara yang diterima kampus dunia', price: 'IDR 1.159.200', priceUnit: '/bulan/siswa' },
  },
  institutionTiers: defaultTiers,
};

interface AdminContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  resetContent: () => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem('siteContent');
      return saved ? JSON.parse(saved) : defaultContent;
    } catch {
      return defaultContent;
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem('isAdmin') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('siteContent', JSON.stringify(content));
    } catch (e) {
      console.error('Failed to save:', e);
    }
  }, [content]);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    try {
      localStorage.removeItem('siteContent');
    } catch (e) {
      console.error('Failed to reset:', e);
    }
  };

  const login = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      try {
        localStorage.setItem('isAdmin', 'true');
      } catch (e) {
        console.error('Failed to login:', e);
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem('isAdmin');
    } catch (e) {
      console.error('Failed to logout:', e);
    }
  };

  return (
    <AdminContext.Provider value={{ content, updateContent, resetContent, isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    return {
      content: defaultContent,
      updateContent: () => {},
      resetContent: () => {},
      isAdmin: false,
      login: () => false,
      logout: () => {},
    };
  }
  return context;
}
