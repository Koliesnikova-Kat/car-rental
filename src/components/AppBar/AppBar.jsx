import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';

export default function AppBar() {
  return (
    <>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </>
  );
}
