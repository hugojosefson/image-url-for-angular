var app = angular.module('plunker', ['addVariant']);

app.controller('MainCtrl', function ($scope) {

  $scope.transient = {
    newVariant: {
      width: null,
      height: null,
      size: null
    }
  };

  $scope.deleteVariant = function (images, image, imageSize) {
    delete image.variants[imageSize];
    if (_.isEmpty(image.variants)) {
      images.splice(_.indexOf(images, image), 1);
    }
  };

  $scope.imageSizes = ["SMALL", "MEDIUM", "LARGE", "XLARGE"];
  $scope.images = {
    icons: [
      {
        type: "icon",
        variants: {
          "SMALL": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124",
          "MEDIUM": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124",
          "XLARGE": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124"
        }
      }
    ],
    promotionalImages: [
      {
        type: "promotional",
        variants: {
          "SMALL": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124",
          "MEDIUM": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124",
          "LARGE": "https://lh3.ggpht.com/CICASkB_8Ojyx-OG6XlcS61YV_lg9oX3gvkWYSzVWEjJxsxqR2_Zdc53NNQ4VIY8JA=w124"
        }
      }
    ],
    screenshots: [
      {
        type: "screenshot",
        variants: {
          "SMALL": "https://lh3.ggpht.com/Jf56G4Oy_xcAtyRYWfYdslR8fE8YUu3gIcrurdf_QvHpLVmTdTQgDHom11XBVhg_6Xrl",
          "XLARGE": "https://lh3.ggpht.com/Jf56G4Oy_xcAtyRYWfYdslR8fE8YUu3gIcrurdf_QvHpLVmTdTQgDHom11XBVhg_6Xrl"
        }
      },
      {
        type: "screenshot",
        variants: {
          "LARGE": "https://lh3.ggpht.com/Dus_0x-9NsnZFa4iOARCN-Oqu-RgtqvjhLnsg-nSRbILNAvgC8YTnKgZTLIkyLCaN-I",
          "XLARGE": "https://lh3.ggpht.com/Dus_0x-9NsnZFa4iOARCN-Oqu-RgtqvjhLnsg-nSRbILNAvgC8YTnKgZTLIkyLCaN-I"
        }
      }
    ]
  };

});
