import { ThemeSelect } from "@/components/ThemeSelect";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8">
      <div className="mt-10 flex justify-center">
        <ThemeSelect />
      </div>
      <p className="mt-8 text-gray-400 flex justify-center" >
        KTTLSAA ©2025
      </p>
    </footer>
  );
};