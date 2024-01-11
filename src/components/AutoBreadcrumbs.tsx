import { Breadcrumbs, Link, LinkProps, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

const breadcrumbNameMap: { [key: string]: string } = {
  "/": "Home",
  "/budgets": "Orcamentos",
  "/entities": "Entidades"
};

export function AutoBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter> */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
