import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

const VaultCreate = Loadable(lazy(() => import('pages/extra-pages/vault-create')));
const Deposit = Loadable(lazy(() => import('pages/extra-pages/deposit')));
const Trading = Loadable(lazy(() => import('pages/extra-pages/trading')));
const Withdrawal = Loadable(lazy(() => import('pages/extra-pages/withdrawal')));
const VaultManagement = Loadable(lazy(() => import('pages/extra-pages/vault-management')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'vault-create',
          element: <VaultCreate />
        },
        {
          path: 'deposit',
          element: <Deposit />
        },
        {
          path: 'Trading',
          element: <Trading />
        },
        {
          path: 'withdrawal',
          element: <Withdrawal />
        },
        {
          path: 'vault-management',
          element: <VaultManagement />
        }
      ]
    }
  ]
};

export default MainRoutes;
