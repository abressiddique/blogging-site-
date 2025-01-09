import Footer from "./Footer";
import Header from "./Header";
import SyntaxHighlighter from "./SyntaxHighlighter";
import Thumbnail from "./Thumbnail";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <div>
      <Header />
      <div className="px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert">
        <Thumbnail />
        {isProduction ? (
          <SyntaxHighlighter>{children}</SyntaxHighlighter>
        ) : (
          <div>{children}</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
