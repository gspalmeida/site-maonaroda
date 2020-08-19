var configValor = 'ewogICJ0YWJlbGFQcmVjbyI6WwogICAgewogICAgICAidGlwb1BpbnR1cmEiOiJwYXJlZGUiLAogICAgICAibWFvT2JyYSI6OCwKICAgICAgInZhbG9yTWF0ZXJpYWwiOlswLDMuNSw0LjUsNl0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvUGludHVyYSI6InRldG8iLAogICAgICAibWFvT2JyYSI6OCwKICAgICAgInZhbG9yTWF0ZXJpYWwiOlswLDMuNSw0LjUsNl0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvUGludHVyYSI6InJvZGFwZSIsCiAgICAgICJtYW9PYnJhIjo4LAogICAgICAidmFsb3JNYXRlcmlhbCI6WzAsMy41LDQuNSw2XQogICAgfSwKICAgIHsKICAgICAgInRpcG9QaW50dXJhIjoibW9sZHVyYSIsCiAgICAgICJtYW9PYnJhIjoyLjUsCiAgICAgICJ2YWxvck1hdGVyaWFsIjpbMCwzLjUsNC41LDZdCiAgICB9LAogICAgewogICAgICAidGlwb1BpbnR1cmEiOiJwb3J0YSIsCiAgICAgICJtYW9PYnJhIjoyMDAsCiAgICAgICJ2YWxvck1hdGVyaWFsIjoxMDAKICAgIH0KICBdCn0=';
var configTamanho = 'ewogICJwZXJpbWV0cm9UZXRvIjpbCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiZG9ybWl0b3JpbyIsCiAgICAgICJ0YW1hbmhvIjpbOS4zLDExLjIsMTMuNCwxNi45LDIwLjldCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6ImJhbmhlaXJvIiwKICAgICAgInRhbWFuaG8iOlsyLjMsMy4zLDQuNSw3LjksMTIuMl0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoic2FsYSIsCiAgICAgICJ0YW1hbmhvIjpbMjAuMSwyMy44LDI3LjksMzguNSw1MC43XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3ppbmhhIiwKICAgICAgInRhbWFuaG8iOls0LjYsNS43LDYuNywxMy44LDIzLjJdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6ImhhbGxkZWVudHJhZGEiLAogICAgICAidGFtYW5obyI6WzIuMiwzLjYsNS40LDkuMiwxMy45XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3JyZWRvciIsCiAgICAgICJ0YW1hbmhvIjpbMy4zLDUsNi44LDEwLjYsMTQuOV0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoic2FjYWRhIiwKICAgICAgInRhbWFuaG8iOlsyLjMsNCwxMiwxNiwyNV0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoibGF2YW5kZXJpYSIsCiAgICAgICJ0YW1hbmhvIjpbMS43LDIuNiwzLjYsNS43LDguNF0KICAgIH0KICBdLAogICJwZXJpbWV0cm9Nb2xkdXJhIjpbCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiZG9ybWl0b3JpbyIsCiAgICAgICJ0YW1hbmhvIjpbMTIuMiwxMy40LDE0LjYsMTYuNSwxOC4zXQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJiYW5oZWlybyIsCiAgICAgICJ0YW1hbmhvIjpbNi4xLDcuMyw4LjUsMTEuMywxNF0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoic2FsYSIsCiAgICAgICJ0YW1hbmhvIjpbMTguMywxOS44LDIxLjMsMjUsMjguN10KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiY296aW5oYSIsCiAgICAgICJ0YW1hbmhvIjpbOS4xLDkuOCwxMC40LDE1LjEsMTkuOF0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiaGFsbGRlZW50cmFkYSIsCiAgICAgICJ0YW1hbmhvIjpbNi4xLDcuOSw5LjgsMTMuMywxNi44XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3JyZWRvciIsCiAgICAgICJ0YW1hbmhvIjpbNy4zLDksMTAuNywxMy45LDE3LjFdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6InNhY2FkYSIsCiAgICAgICJ0YW1hbmhvIjpbNiw4LDE0LDE2LDIwXQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJsYXZhbmRlcmlhIiwKICAgICAgInRhbWFuaG8iOls1LjUsNi42LDcuNiw5LjYsMTEuNl0KICAgIH0KICBdLAogICJwZXJpbWV0cm9QYXJlZGUiOlsKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJkb3JtaXRvcmlvIiwKICAgICAgInRhbWFuaG8iOlsxMi4xOSwxMy40MSwxNC42MywxNi40NiwxOC4yOV0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiYmFuaGVpcm8iLAogICAgICAidGFtYW5obyI6WzYuMSw3LjMyLDguNTMsMTEuMjgsMTQuMDJdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6InNhbGEiLAogICAgICAidGFtYW5obyI6WzE4LjI5LDE5LjgxLDIxLjM0LDI0Ljk5LDI4LjY1XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3ppbmhhIiwKICAgICAgInRhbWFuaG8iOls5LjE0LDkuNzUsMTAuMzYsMTUuMDksMTkuODFdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6ImhhbGxkZWVudHJhZGEiLAogICAgICAidGFtYW5obyI6WzYuMTAsNy45Miw5Ljc1LDEzLjI2LDE2Ljc2XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3JyZWRvciIsCiAgICAgICJ0YW1hbmhvIjpbNy4zMiw4Ljk5LDEwLjY3LDEzLjg3LDE3LjA3XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJzYWNhZGEiLAogICAgICAidGFtYW5obyI6WzMsNCw3LDgsMTBdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6ImxhdmFuZGVyaWEiLAogICAgICAidGFtYW5obyI6WzUuNDksNi41NSw3LjYyLDkuNjAsMTEuNThdCiAgICB9CiAgXSwKICAicGVyaW1ldHJvUm9kYXBlIjpbCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiZG9ybWl0b3JpbyIsCiAgICAgICJ0YW1hbmhvIjpbMTIuMiwxMy40LDE0LjYsMTYuNSwxOC4zXQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJiYW5oZWlybyIsCiAgICAgICJ0YW1hbmhvIjpbNi4xLDcuMyw4LjUsMTEuMywxNF0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoic2FsYSIsCiAgICAgICJ0YW1hbmhvIjpbMTguMywxOS44LDIxLjMsMjUsMjguN10KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiY296aW5oYSIsCiAgICAgICJ0YW1hbmhvIjpbOS4xLDkuOCwxMC40LDE1LjEsMTkuOF0KICAgIH0sCiAgICB7CiAgICAgICJ0aXBvQ29tb2RvIjoiaGFsbGRlZW50cmFkYSIsCiAgICAgICJ0YW1hbmhvIjpbNi4xLDcuOSw5LjgsMTMuMywxNi44XQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJjb3JyZWRvciIsCiAgICAgICJ0YW1hbmhvIjpbNy4zLDksMTAuNywxMy45LDE3LjFdCiAgICB9LAogICAgewogICAgICAidGlwb0NvbW9kbyI6InNhY2FkYSIsCiAgICAgICJ0YW1hbmhvIjpbNiw4LDE0LDE2LDIwXQogICAgfSwKICAgIHsKICAgICAgInRpcG9Db21vZG8iOiJsYXZhbmRlcmlhIiwKICAgICAgInRhbWFuaG8iOls1LjUsNi42LDcuNiw5LjYsMTEuNl0KICAgIH0KICBdLAogICJhbHR1cmFQYXJlZGUiOlsyLjcsMy41LDVdCn0=';
var cuponsDesconto = 'ewogICJjdXBvbnNBdGl2b3MiOlsKICAgIHsKICAgICAgImlkQ3Vwb20iOiJxdWludG9hbmRhcjIwIiwKICAgICAgImRlc2NvbnRvIjowLjgsCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjE1LTA4LTIwMTkiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjMwLTEwLTIwMTkiCiAgICB9LAogICAgewogICAgICAiaWRDdXBvbSI6IkVDTTEwIiwKICAgICAgImRlc2NvbnRvIjowLjksCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjI1LTEwLTIwMTkiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjAxLTAxLTIwMjkiCiAgICB9LAogICAgewogICAgICAiaWRDdXBvbSI6IkVDTTE1IiwKICAgICAgImRlc2NvbnRvIjowLjg1LAogICAgICAidmFsaWRhZGVJbmljaW8iOiIyNS0xMC0yMDE5IiwKICAgICAgInZhbGlkYWRlRmluYWwiOiIzMS0xMi0yMDE5IgogICAgfSwKICAgIHsKICAgICAgImlkQ3Vwb20iOiJDTEFSTzEwIiwKICAgICAgImRlc2NvbnRvIjowLjksCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjMwLTAxLTIwMjAiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjAxLTAxLTIwMjkiCiAgICB9LAogICAgewogICAgICAiaWRDdXBvbSI6IlZBTlRBR0VNNUEiLAogICAgICAiZGVzY29udG8iOjAuODgsCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjE5LTA1LTIwMjAiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjMxLTEyLTIwMjAiCiAgICB9LAogICAgewogICAgICAiaWRDdXBvbSI6IkNMQVJJU1NFMyIsCiAgICAgICJkZXNjb250byI6MC45NywKICAgICAgInZhbGlkYWRlSW5pY2lvIjoiMTMtMDctMjAyMCIsCiAgICAgICJ2YWxpZGFkZUZpbmFsIjoiMzEtMTItMjAyMCIKICAgIH0sCiAgICB7CiAgICAgICJpZEN1cG9tIjoiUkFGQVNPQVJFUyIsCiAgICAgICJkZXNjb250byI6MC45NSwKICAgICAgInZhbGlkYWRlSW5pY2lvIjoiMjAtMDctMjAyMCIsCiAgICAgICJ2YWxpZGFkZUZpbmFsIjoiMzEtMTItMjAyMSIKICAgIH0sCiAgICB7CiAgICAgICJpZEN1cG9tIjoiVEFVSEFORUIiLAogICAgICAiZGVzY29udG8iOjAuOTUsCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjIwLTA3LTIwMjAiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjMxLTEyLTIwMjEiCiAgICB9LAogICAgewogICAgICAiaWRDdXBvbSI6Ik1BVEhFVVNQIiwKICAgICAgImRlc2NvbnRvIjowLjk1LAogICAgICAidmFsaWRhZGVJbmljaW8iOiIyMC0wNy0yMDIwIiwKICAgICAgInZhbGlkYWRlRmluYWwiOiIzMS0xMi0yMDIxIgogICAgfSwKICAgIHsKICAgICAgImlkQ3Vwb20iOiJTVVNBTkFDT04iLAogICAgICAiZGVzY29udG8iOjAuOTUsCiAgICAgICJ2YWxpZGFkZUluaWNpbyI6IjIwLTA3LTIwMjAiLAogICAgICAidmFsaWRhZGVGaW5hbCI6IjMxLTEyLTIwMjEiCiAgICB9CiAgXQp9';