import { Content } from './styled';

interface IWrapperProps {
  children: React.ReactElement;
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => (
  <Content>{children}</Content>
);

export default Wrapper;
