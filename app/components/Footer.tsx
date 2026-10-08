export default function Footer() {
  return (
    <footer className="flex max-w-[1920px] w-full justify-center items-center text-sm p-3 border-t border-black dark:border-white m-auto">
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}
