import {
  TwitterLogo,
  DiscordLogo,
  GlobeSimple,
  GithubLogo,
} from 'phosphor-react';

export function Footer() {
  return (
    <footer className="container border-t border-neutral-700 flex flex-col md:flex-row gap-4 justify-between items-center py-8 mt-8">
      <div className="flex items-center gap-1">
        <span className="body-3">Created by Tech_NFT</span>
      </div>
    </footer>
  );
}
