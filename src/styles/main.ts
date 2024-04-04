import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 10px;
  background: whitesmoke;
  border-radius: 4px;
  margin-bottom: 40px;
  & > li:after {
    content: "${"/"}";
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;
  color: #ababab;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: #666666;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
