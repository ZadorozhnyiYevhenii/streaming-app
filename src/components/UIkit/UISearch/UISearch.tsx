import Search from "antd/es/input/Search";
import "./UISearch.scss";

export const UISearch = ({
  placeholder,
  loading,
}: {
  placeholder: string;
  loading: boolean;
}) => {
  return <Search placeholder={placeholder} loading={loading} />;
};
