import '../../../app/globals.css';
interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-[calc(100%-10%)] w-full max-w-f-hd mx-auto">
      {children}
    </div>
  );
};
export default AdminLayout;
