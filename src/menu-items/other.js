// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other = {
  id: 'Dashboard',
  title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  children: [
    {
      id: 'vault-create',
      title: <FormattedMessage id="Vault Create" />,
      type: 'item',
      url: '/vault-create',
      icon: icons.ChromeOutlined
    },
    {
      id: 'deposit',
      title: <FormattedMessage id="Deposit" />,
      type: 'item',
      url: '/deposit',
      icon: icons.BoxPlotOutlined
    },
    {
      id: 'trading',
      title: <FormattedMessage id="Trading" />,
      type: 'item',
      url: '/trading',
      icon: icons.GatewayOutlined
    },
    {
      id: 'withdrawal',
      title: <FormattedMessage id="Withdrawal" />,
      type: 'item',
      url: '/withdrawal',
      icon: icons.DeploymentUnitOutlined
    },
    {
      id: 'vault-management',
      title: <FormattedMessage id="Vault Management" />,
      type: 'item',
      url: '/vault-management',
      icon: icons.MenuUnfoldOutlined
    }
  ]
};

export default other;
