import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss';
const TopNavbar = () => {
    return (

        <Navbar style={{ textAlign: "center", backdropFilter: "blur(7px)", background: "rgba(0,0,0,0.1)", height: "3rem" }} className='fixed-top text-warning justify-content-center' expand="lg">
            <Container className='fixed-top text-danger  justify-content-center'  >
                <Navbar.Brand className='text-danger' href="#">React-Bootstrap-Practice</Navbar.Brand>
                <Navbar.Toggle className='text-danger' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='text-danger'style={{ textAlign: "center", backdropFilter: "blur(7px)", background: "rgba(0,0,0,0.1)", height: "3rem" }} id="basic-navbar-nav ">
                    <Nav className="me-auto text-danger ">
                        <Nav.Link className='text-danger hoverable' href="#About">About</Nav.Link>
                        <Nav.Link className='text-danger hoverable' href="#Resume">Resume</Nav.Link>
                        <Nav.Link className='text-danger hoverable' href="#Testimonials">Testimonials</Nav.Link>
                        <Nav.Link className='text-danger hoverable' href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default TopNavbar;


//     return (

//         // <header>
//         //     <nav class="navbar navbar-default justify-content-center navbar-expand-lg navbar-fixed-top">
//         //         <div class="container-fluid justify-content-center fixed-top">
//         //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         //                 <span class="navbar-toggler-icon"></span>
//         //             </button>
//         //             <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
//         //                 <ul class="navbar-nav">
//         //                     <li class="nav-item">
//         //                         <a class="nav-link active" aria-current="page" href="#">About</a>
//         //                     </li>
//         //                     <li class="nav-item">
//         //                         <a class="nav-link" href="#">Resume</a>
//         //                     </li>
//         //                     <li class="nav-item">
//         //                         <a class="nav-link" href="#">Portfolio</a>
//         //                     </li>
//         //                     <li class="nav-item">
//         //                         <a class="nav-link" href="#">Testimonials
//         //                         </a>
//         //                     </li>

//         //                     <li class="nav-item">
//         //                         <a class="nav-link">Contact</a>
//         //                     </li>
//         //                 </ul>
//         //             </div>
//         //         </div>
//         //     </nav>
//         // </header>

//         // <nav class="navbar navbar-light bg-light fixed-top">
//         //     <div class="container-fluid">
//         //         <a class="navbar-brand" href="#">Offcanvas navbar</a>
//         //         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
//         //             <span class="navbar-toggler-icon"></span>
//         //         </button>
//         //         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//         //             <div class="offcanvas-header">
//         //                 <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
//         //                 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         //             </div>
//         //             <div class="offcanvas-body">
//         //                 <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//         //                     <li class="nav-item">
//         //                         <a class="nav-link active" aria-current="page" href="#">Home</a>
//         //                     </li>
//         //                     <li class="nav-item">
//         //                         <a class="nav-link" href="#">Link</a>
//         //                     </li>
//         //                     <li class="nav-item dropdown">
//         //                         <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//         //                             Dropdown
//         //                         </a>
//         //                         <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
//         //                             <li><a class="dropdown-item" href="#">Action</a></li>
//         //                             <li><a class="dropdown-item" href="#">Another action</a></li>
//         //                             <li>
//         //                                 <hr class="dropdown-divider"/>
//         //                             </li>
//         //                             <li><a class="dropdown-item" href="#">Something else here</a></li>
//         //                         </ul>
//         //                     </li>
//         //                 </ul>
//         //                 <form class="d-flex">
//         //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         //                         <button class="btn btn-outline-success" type="submit">Search</button>
//         //                 </form>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </nav>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Dropdown
//                             </a>
//                             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li><a class="dropdown-item" href="#">Action</a></li>
//                                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                                 <li><hr class="dropdown-divider" /></li>
//                                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled">Disabled</a>
//                         </li>
//                     </ul>
//                     <form class="d-flex">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//         // <nav class="navbar navbar-default navbar-fixed-top">
//         //     <div class="container-fluid the-navbar">
//         //         <div class="navbar-header">
//         //             <li class="nav-item">
//         //                 <a class="nav-link active" aria-current="page" href="#">About</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Resume</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Portfolio</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Testimonials
//         //                 </a>
//         //             </li>

//         //             <li class="nav-item">
//         //                 <a class="nav-link">Contact</a>
//         //             </li>
//         //         </div>
//         //         <div id="navbar" class="navbar-collapse collapse">
//         //             <li class="nav-item">
//         //                 <a class="nav-link active" aria-current="page" href="#">About</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Resume</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Portfolio</a>
//         //             </li>
//         //             <li class="nav-item">
//         //                 <a class="nav-link" href="#">Testimonials
//         //                 </a>
//         //             </li>

//         //             <li class="nav-item">
//         //                 <a class="nav-link">Contact</a>
//         //             </li>
//         //         </div>
//         //         <div class="the-blur"></div>
//         //     </div>
//         // </nav>


//     )
// }

// export default Navbar;