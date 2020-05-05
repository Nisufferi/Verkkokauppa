<template>
  <div id="Otayhteytta">
    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 order-lg-2">
            <div class="p-5">
              <form>
                <h2>Ota yhteyttä!</h2>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nimi:</label>
                  <input type="name" class="form-control" id="nameInput" placeholder="Nimi">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Sähköpostiosoite:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    placeholder="Sähköpostiosoite"
                  >
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Viestisi meille</label>
                  <textarea class="form-control" id="msgInput" rows="3"></textarea>
                </div>
                <b-button class="btn-primary">Lähetä</b-button>
              </form>
            </div>
          </div>
          <div class="col-lg-4 order-lg-2">
            <div class="p-5">
              <div class="section-title">
                <h2>Yhteystiedot</h2>
              </div>

              <p>Marko Pigg: 040 0666 924</p>
              <p>Olli Huhtala: 044 666 959</p>
              <p>posti@mpsahko.fi</p>
              <p>Ammestie 10 43900 Kinnula</p>
            </div>
          </div>
          <div class="col-lg-4 order-lg-2">
            <div class="row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7672440554643!2d24.97954653870967!3d63.36912271446015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4686a39b34fce057%3A0xc3ae3aab6383d238!2zS2lubnVsYW4gTVAtU8OkaGvDtg!5e0!3m2!1sen!2sfi!4v1555329234495!5m2!1sen!2sfi"
                width="600"
                height="350"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-5 bg-black">
      <div class="container">
        <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>
