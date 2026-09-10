import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SiteContent {
  brandName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  email: string;
  whatsapp: string;
  address: string;
  primaryColor: string;
  secondaryColor: string;
  products: {
    schoolio: { name: string; description: string; price: string; priceUnit: string; };
    mobymax: { name: string; description: string; price: string; priceUnit: string; };
    ged: { name: string; description: string; price: string; priceUnit: string; };
  };
}

const defaultContent: SiteContent = {
  brandName: 'Study Buddy',
  tagline: 'where learning meets technology',
  heroTitle: 'Upgrade Program Sekolah Anda dengan Platform Belajar Digital Bertaraf Internasional',
  heroSubtitle: 'Study Buddy membantu sekolah dan lembaga kursus menyediakan LMS dengan rapor & ijazah internasional — hemat hingga 80% biaya dibanding sekolah internasional.',
  heroBadge: '🎓 Where Learning Meets Technology',
  email: 'studybuddyindonesia1@gmail.com',
  whatsapp: '62881037380330',
  address: 'Jl. Nuasa Utama Raya No. 257, Jimbaran, Kuta Selatan - Badung',
  primaryColor: '#2563eb',
  secondaryColor: '#7c3aed',
  products: {
    schoolio: { name: 'Schoolio', description: 'Kurikulum lengkap untuk homeschool & sekolah', price: 'IDR 655.200', priceUnit: '/bulan/siswa' },
    mobymax: { name: 'MobyMax', description: 'Persiapan akademik bertaraf internasional', price: 'IDR 655.200', priceUnit: '/bulan/siswa' },
    ged: { name: 'GED', description: 'Ijazah SMA setara yang diterima kampus dunia', price: 'IDR 1.159.200', priceUnit: '/bulan/siswa' },
  },
};

interface AdminContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  resetContent: () => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

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
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('siteContent', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('siteContent');
  };

  const login = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
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
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
