<template>
    <div style="width: 100%;" >
      <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <div className="container">
        <router-link class="navbar-brand fw-brand fw-bold fs4" to="/">Shopping</router-link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ml-4">
              <router-link class="nav-link" aria-current="page" to="/"><i class='fas fa-laptop-house' style='font-size:36px'></i></router-link>
            </li>
            <li className="nav-item">
              <router-link class="nav-link" style="margin-right: 10px; text-decoration: none"  to="/product"><i class='fas fa-shopping-bag' style='font-size:36px'></i></router-link>
            </li>
         
          </ul>
          <div className="buttons">
            <router-link to="/login" class="btn btn-outline-dark">
                <i class='fa fa-sign-in me-1'></i>Login
            </router-link>
            <router-link to="/register" class="btn btn-outline-dark ms-2">
                <i className='fa fa-user-plus me-1'></i>Register
            </router-link>
            <router-link to="/cart" class="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1'></i>Cart
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>