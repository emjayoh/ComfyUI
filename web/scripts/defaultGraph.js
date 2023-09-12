export const defaultGraph = {"last_node_id": 32,
  "last_link_id": 65,
  "nodes": [
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        338,
        286
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 55
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            5,
            8,
            21
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature"
      ]
    },
    {
      "id": 7,
      "type": "UpscaleModelLoader",
      "pos": [
        756,
        436
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            1,
            37
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "4x_RealisticRescaler_100000_G.pth"
      ]
    },
    {
      "id": 12,
      "type": "LatentUpscaleBy",
      "pos": [
        1081,
        59
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 16
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            22
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LatentUpscaleBy"
      },
      "widgets_values": [
        "nearest-exact",
        1.5
      ]
    },
    {
      "id": 13,
      "type": "SaveImage",
      "pos": [
        1969,
        74
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 16,
      "mode": 4,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 18
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 20,
      "type": "SaveImage",
      "pos": [
        1976,
        500
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 39
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 2,
      "type": "KSamplerAdvanced",
      "pos": [
        750,
        53
      ],
      "size": {
        "0": 315,
        "1": 334
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 46
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 6
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 5
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            16
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerAdvanced"
      },
      "widgets_values": [
        "enable",
        35986342780140,
        "fixed",
        20,
        8,
        "euler_ancestral",
        "karras",
        0,
        19,
        "disable"
      ]
    },
    {
      "id": 1,
      "type": "UltimateSDUpscale",
      "pos": [
        1635,
        69
      ],
      "size": {
        "0": 315,
        "1": 590
      },
      "flags": {},
      "order": 12,
      "mode": 4,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 15
        },
        {
          "name": "model",
          "type": "MODEL",
          "link": 50
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 34
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 8
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 2
        },
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 1
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            18
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UltimateSDUpscale"
      },
      "widgets_values": [
        4,
        811354807085888,
        "fixed",
        10,
        5,
        "euler_ancestral",
        "karras",
        0.3,
        "Linear",
        512,
        512,
        5,
        0,
        "Half Tile",
        1,
        64,
        8,
        16,
        "enable"
      ]
    },
    {
      "id": 14,
      "type": "KSampler",
      "pos": [
        1080,
        188
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 52
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 20
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 21
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 22
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            40
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        367414304767402,
        "fixed",
        23,
        6.6666717529296875,
        "euler_ancestral",
        "karras",
        0.5
      ]
    },
    {
      "id": 10,
      "type": "EmptyLatentImage",
      "pos": [
        11,
        43
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            12
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        2
      ]
    },
    {
      "id": 18,
      "type": "PreviewImage",
      "pos": [
        1412,
        160
      ],
      "size": {
        "0": 210,
        "1": 246
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 36
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 19,
      "type": "ImageUpscaleWithModel",
      "pos": [
        1969,
        399
      ],
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 37
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 38
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            39
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      }
    },
    {
      "id": 29,
      "type": "UpscaleModelLoader",
      "pos": [
        1062,
        538
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            57
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "RealESRGAN_x2.pth"
      ]
    },
    {
      "id": 11,
      "type": "VAEDecode",
      "pos": [
        1411,
        66
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 40
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 24
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            15,
            36,
            38,
            58
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 25,
      "type": "SaveImage",
      "pos": [
        2438,
        764
      ],
      "size": {
        "0": 315,
        "1": 270
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 59
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 30,
      "type": "ImageUpscaleWithModel",
      "pos": [
        2116,
        830
      ],
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 57
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 58
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            59
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      }
    },
    {
      "id": 3,
      "type": "CheckpointLoaderSimple",
      "pos": [
        10,
        196
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            62
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            63
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            2,
            24
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "zavy-xl.safetensors"
      ]
    },
    {
      "id": 32,
      "type": "LoraLoader",
      "pos": [
        -45,
        -184
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 62
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 63
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            64
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            65
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "detail.safetensors",
        1.5000000000000004,
        1.11
      ]
    },
    {
      "id": 23,
      "type": "LoraLoader",
      "pos": [
        369,
        -122
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 64
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 65
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            46,
            50,
            52
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            54,
            55
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "real.safetensors",
        1.11,
        1
      ]
    },
    {
      "id": 5,
      "type": "CLIPTextEncode",
      "pos": [
        337,
        49
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 54
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6,
            20,
            34
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "Adorable stunning Gorgon, walk on snake tail, hair is moving snakes, her whole perfect hourglass figure body is covered with shiny scales, copper hands with sharp steel claws, wings with sparkling golden plumage, Realistic, brushstrokes, expressive, textured, hyper detailed, accurate representation of nature, dark palette dark fantasy, Dark Aesthetic, oil paint, high-quality canvas, limited edition, award-winning, golden ratio, 4D dimension, by Will Murai --no legs, signature, dull, boring, ugly, abstract --s 300 --upbeta --ar 10:21 --q 5 --v 5"
      ]
    }
  ],
  "links": [
    [
      1,
      7,
      0,
      1,
      5,
      "UPSCALE_MODEL"
    ],
    [
      2,
      3,
      2,
      1,
      4,
      "VAE"
    ],
    [
      5,
      6,
      0,
      2,
      2,
      "CONDITIONING"
    ],
    [
      6,
      5,
      0,
      2,
      1,
      "CONDITIONING"
    ],
    [
      8,
      6,
      0,
      1,
      3,
      "CONDITIONING"
    ],
    [
      12,
      10,
      0,
      2,
      3,
      "LATENT"
    ],
    [
      15,
      11,
      0,
      1,
      0,
      "IMAGE"
    ],
    [
      16,
      2,
      0,
      12,
      0,
      "LATENT"
    ],
    [
      18,
      1,
      0,
      13,
      0,
      "IMAGE"
    ],
    [
      20,
      5,
      0,
      14,
      1,
      "CONDITIONING"
    ],
    [
      21,
      6,
      0,
      14,
      2,
      "CONDITIONING"
    ],
    [
      22,
      12,
      0,
      14,
      3,
      "LATENT"
    ],
    [
      24,
      3,
      2,
      11,
      1,
      "VAE"
    ],
    [
      34,
      5,
      0,
      1,
      2,
      "CONDITIONING"
    ],
    [
      36,
      11,
      0,
      18,
      0,
      "IMAGE"
    ],
    [
      37,
      7,
      0,
      19,
      0,
      "UPSCALE_MODEL"
    ],
    [
      38,
      11,
      0,
      19,
      1,
      "IMAGE"
    ],
    [
      39,
      19,
      0,
      20,
      0,
      "IMAGE"
    ],
    [
      40,
      14,
      0,
      11,
      0,
      "LATENT"
    ],
    [
      46,
      23,
      0,
      2,
      0,
      "MODEL"
    ],
    [
      50,
      23,
      0,
      1,
      1,
      "MODEL"
    ],
    [
      52,
      23,
      0,
      14,
      0,
      "MODEL"
    ],
    [
      54,
      23,
      1,
      5,
      0,
      "CLIP"
    ],
    [
      55,
      23,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      57,
      29,
      0,
      30,
      0,
      "UPSCALE_MODEL"
    ],
    [
      58,
      11,
      0,
      30,
      1,
      "IMAGE"
    ],
    [
      59,
      30,
      0,
      25,
      0,
      "IMAGE"
    ],
    [
      62,
      3,
      0,
      32,
      0,
      "MODEL"
    ],
    [
      63,
      3,
      1,
      32,
      1,
      "CLIP"
    ],
    [
      64,
      32,
      0,
      23,
      0,
      "MODEL"
    ],
    [
      65,
      32,
      1,
      23,
      1,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4 }
