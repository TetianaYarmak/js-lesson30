installComponents();

async function installComponents() {
  const placeholders = Array.prototype.filter.call(
    document.querySelectorAll("*"), 
    el => el.localName.startsWith("common-")
  );

  for (const placeholder of placeholders) {
    const fileName = placeholder.localName.slice(7) + ".htm";
    const response = await fetch(fileName);

    if (!response.ok) {
      console.error(`Error loading ${fileName}: ${response.statusText}`);
      continue;
    }

    const componentHTML = await response.text();
    
    placeholder.outerHTML = componentHTML;
  }

  const styles = document.querySelectorAll('style');

  for (const style of styles) {
    document.head.append(style);
  }
  document.body.removeAttribute('hidden');
}