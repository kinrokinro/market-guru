import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Footer = ({ walletConnected, dappApproved }) => {
  const walletStatus = walletConnected ? 'Connected' : 'Disconnected';
  const dappStatus = dappApproved ? 'Approved' : 'Not approved';
  return (
    <footer className="footer">
      <div className="footer__info">
        <PowerSettingsNewIcon
          style={{ color: `${walletConnected ? 'green' : 'red'}` }}
        />
        <div style={{ marginRight: '2rem' }}>Wallet {walletStatus}</div>
        <PowerSettingsNewIcon
          style={{ color: `${dappApproved ? 'green' : 'red'}` }}
        />
        <div>Dapp {dappStatus}</div>
      </div>
    </footer>
  );
};

export default Footer;
