# Get all projects

Return all of the projects that should be displayed on the page

**URL** : `/api/projects/`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

Returns all of the projects that should be displayed on the page

```json
{
  "projects": [
    {
      "id": "nadgorliwy-konduktor",
      "srcUrl": "https://github.com/bodgingbear/nadgorliwy-konduktor",
      "createdAt": "2019-04-07T02:07:40Z",
      "title": "Nadgorliwy konduktor",
      "mainImage": "https://raw.githubusercontent.com/bodgingbear/nadgorliwy-konduktor/master/website/screenshot.png",
      "description": "# Test",
      "playNowUrl": "https://konduktor.bodgingbear.dev"
    }
  ]
}
```

## Notes

* All of the data that is here is retrieved from a `WEBSITE.md` file from repositories in `bodgingbear` organization