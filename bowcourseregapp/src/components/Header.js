import React from "react";

const Header = () => {
  return (
    <header class="py-4 mb-0 border-bottom bg-dark-subtle">
      <div class="container d-flex flex-wrap justify-content-center">
        <span class="fs-4 fw-bold d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-muted">
          Bow Online Course Registration
        </span>

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> */}
      </div>
    </header>
  );
};

export default Header;
