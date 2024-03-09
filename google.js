// Fetch product data from JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('product-container');
        const products = data.products;

        // Filter products based on brand "Apple"
        const appleProducts = products.filter(product => product.brandtype === "Google");

        // Iterate through each product
        for (let i = 0; i < appleProducts.length; i += 2) {
            // Create row div
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            // Create HTML elements for two products
            for (let j = i; j < i + 2 && j < appleProducts.length; j++) {
                const product = appleProducts[j];

                // Create product column div
                const colDiv = document.createElement('div');
                colDiv.classList.add('col-md-6');

                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'mb-4');

                const img = document.createElement('img');
                img.src = product.imageName;
                img.classList.add('card-img-top');
                img.alt = product.name;

                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add('card-body');

                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = product.name;

                const description = document.createElement('p');
                description.classList.add('card-text');
                description.textContent = product.description;

                // Append elements to the card body
                cardBodyDiv.appendChild(title);
                cardBodyDiv.appendChild(description);

                // Append elements to the card
                cardDiv.appendChild(img);
                cardDiv.appendChild(cardBodyDiv);

                // Append card to the column
                colDiv.appendChild(cardDiv);

                // Append column to the row
                rowDiv.appendChild(colDiv);
            }

            // Append row to the product container
            productsContainer.appendChild(rowDiv);
        }
    })
    .catch(error => console.error('Error fetching product data:', error));

