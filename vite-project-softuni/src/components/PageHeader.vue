<script></script>

<template>
  <header>
    <div class="navbar-brand">CARS EU</div>
    <nav>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/all-cars"> All Cars </a>
        </li>
        <li>
          <a href="/top-10"> Top 10 Cars </a>
        </li>
        <li>
          <a href="/find-us"> Find Us </a>
        </li>
        <li>
          <a href="/user/profile"> My Profile </a>
        </li>
        <li>
          <a href="/add"> Add a Car </a>
        </li>
        <li>
          <a href="javascript:void(0);"> Logout </a>
        </li>

        <li>
          <a href="/user/login"> Login </a>
        </li>
        <li>
          <a href="/user/register"> Register </a>
        </li>
      </ul>
    </nav>
    <div class="welcome">
      <span>Welcome, </span>
      <a href="/user/profile"> FIRST_NAME LAST_NAME </a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  background: #212529;
}
header nav ul li a,
header a,
.welcome span {
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.815);
}

.welcome a {
  font-weight: bold;
}

header nav ul li {
  list-style: none;
}

header nav ul li a:hover,
.welcome a:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
  padding-bottom: 8px;
  transition: all 0.2s ease;
}

header nav ul {
  display: flex;
  gap: 1.75rem;
}

.navbar-brand {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 3px;
}
</style>
