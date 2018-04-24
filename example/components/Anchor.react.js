import React, {Fragment} from 'react';

const Anchor = ({children, id}) => (
  <Fragment>
    <div className="page-anchor" id={id} />
    <a
      className="anchor"
      href={`#${id}`}>
      <span className="anchor-icon">#</span>
      {children}
    </a>
  </Fragment>
);

export default Anchor;
