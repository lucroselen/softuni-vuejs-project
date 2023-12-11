<script></script>

<template>
  <body>
    <div class="container">
      <div class="row-container">
        <div class="row">
          <div class="flex-container">
            <div class="project-info-box">
              <h2><b>Car Details</b></h2>
              <p id="carDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="project-info-box" id="carInfo">
              <p><b>Brand:</b> Toyota</p>
              <p><b>Model:</b> Camry</p>
              <p><b>Year:</b> 2022</p>
              <p><b>Fuel Type:</b> Gasoline</p>
              <p><b>Mileage:</b> 10,000 KM</p>
              <p><b>Added by:</b> John Doe (contact for a deal)</p>
              <p><b>Price:</b> $20,000</p>
              <p>
                <b>Current car rating: </b><b style="color: orange">4 stars</b>
              </p>
            </div>
            <div class="project-info-box mybuttons">
              <button class="success-btn" onclick="handleLike()">Like</button>
              <button class="warning-btn" onclick="handleDislike()">
                Dislike
              </button>
            </div>
            <div class="project-info-box mybuttons">
              <router-link class="dark-btn" to="/edit">Edit</router-link>
              <button class="danger-btn" onclick="handleDelete()">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div class="row img">
          <div class="flex-container">
            <img
              src="https://mediacloud.carbuyer.co.uk/image/private/s--rPzinXEn--/v1579656510/carbuyer/2019/09/01_47.jpg"
              alt="project-pic"
              class="rounded"
            />
            <div id="wrapper">
              <form id="commentForm">
                <textarea
                  id="comment"
                  rows="3"
                  placeholder="Write a comment..."
                  required
                ></textarea>
                <input class="comment-btn" type="submit" value="Add Comment" />
              </form>
            </div>
            <div class="project-info-box" id="commentsSection">
              <h2 class="commentTitle">Comments:</h2>
              <p class="comment">Lorem ipsum comment 1.</p>
              <p class="comment">Lorem ipsum comment 2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #686c6d;
  letter-spacing: 0.03rem;
  margin: 0;
  padding: 0;
}
h2 {
  color: #000;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}

.container {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
}

.row-container {
  display: flex;
  justify-content: center;
  gap: 26px;
}

.row {
  display: flex;
}

.img {
  padding-top: 0.65rem;
  width: 913px;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.project-info-box {
  margin: 10px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
}

.project-info-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}

.project-info-box p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.rounded {
  border-radius: 5px;
}

.comment:not(:last-child) {
  margin-bottom: 1rem;
}

.commentTitle {
  margin-bottom: 1.75rem;
  margin-top: -1rem;
}

img {
  object-fit: cover;
}

#commentForm {
  margin-top: 20px;
}

textarea {
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 1.15rem;
  border: none;
}

textarea:focus {
  outline: none;
  box-shadow: 0 0 14px #3590f1;
}
button,
.dark-btn {
  margin: 6px;
  width: 100%;
  text-align: center;
}
.mybuttons,
.dark-btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.comment-btn {
  padding: 10px 20px;
  background-color: #201f1f;
  color: #fff;
  float: right;
  font-size: large;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-bottom: 26px;
}

.success-btn {
  background-color: #138e30;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.warning-btn {
  background-color: #ffc107;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dark-btn {
  background-color: #343a40;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.danger-btn {
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
