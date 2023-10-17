export const content = {
  en: {
    translations: {
      header: {
        home: "Home",
        collections: "Collections",
        dna: "DNA",
        account: "My account",
        login: "Login",
        admin: "Admin",
      },
      errors: {
        notFound404: "404: Page not found",
        backButton: "Back Home",
      },
      pages: {
        admin: {
          sidebar: {
            products: "Products",
            backHome: "Home",
          },
          manageProducts: {
            title: "Manage Products",
            createProduct: "Create Product",
            list: {
              model: "Model",
              movement: "Movement",
              sku: "SKU",
              actions: "Actions",
              actionsHints: {
                delete: {
                  tooltip: "Delete this product",
                  title: "Delete product",
                  confirm: "Confirm",
                  reject: "Reject",
                  description:
                    "Are you sure you want to delete this product, this is irreversible",
                },
              },
            },
          },
          createProducts: {
            title: "Manage Products - Create Product",
            editTitle: "Manage Products - Edit Product",
            isCreatingProduct: "The product is being created",
            isLoadingProduct: "The product is being fetched",
            form: {
              required: "Required",
              mustNumber: "Must be a number",
              thumbnail: "Thumbnail",
              fileSize: "The file size should be less than:",
              specialThumbnail: "Special Thumbnail",
              images: "Images",
              model: "Model",

              dimensions: "Dimensions",
              color: "Color",
              description: "Description",
              sku: "SKU",
              submit: "Create Product",
              bracelet: "Bracelet",
              numberWatches: "Number Watches",
            },
          },
        },
        auth: {
          login: {
            loaderMessage: "Logging in",
            username: "Username",
            password: "Password",
            login: "Login",
            register: "Not registered yet? Click here",
          },
          register: {
            loaderMessage: "Creating new user",
            phone: "Phone",
            username: "Username",
            fullName: "Full Name",
            birthday: "Birthday",
            password: "Password",
            address1: "Address line 1",
            address2: "Address line 2",
            city: "City",
            postalCode: "Postal Code",
            confirmPassword: "Confirm Password",
            email: "E-mail",
            register: "Register",
          },
        },
        dna: {
          theBrand: "The brand",
          theLogo: "The logo",
        },
      },
    },
  },
};
