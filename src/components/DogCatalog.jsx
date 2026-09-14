const DogCatalog = () => {

  return (
    <div className="dog-catalog">
        <section id="view-catalog" class="shell">
            <div id="catalog-head" class="shell">
                <div>
                    <h2 class="catalog-head">Dog Catalog</h2>
                    <p class="section-sub">All registered dog customers. Click a card for the full profile.</p>
                </div>
            </div>
            <div class="dog-grid" id="dog-grid">
                {/* Dog cards go here */}
                {/* Template for a dog card: */}
                {/* <a href="#" class="dog-card">
                    <div class="avatar">
                        <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Dog" />
                    </div>
                    <div class="name">Charlie</div>
                    <div class="card-meta">
                        <div class="chip">Border Collie</div>
                        <div class="chip mono">4 yrs</div>
                    </div>
                    <div class="card-status">
                        <span class="dot in"></span>
                        " Checked in today "
                    </div>
                    <span class="card-arrow">View profile →</span>
                </a> */}
            </div>
        </section>      
    </div>
  );
};

export default DogCatalog;