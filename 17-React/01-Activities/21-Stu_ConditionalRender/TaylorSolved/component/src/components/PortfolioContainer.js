import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function PageDisplay({ currentPage }) {
  switch (currentPage.toLowerCase()) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "blog":
      return <Blog />;
    case "contact":
      return <Contact />;
    default:
      return null;
  }
}

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <PageDisplay currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default PortfolioContainer;
