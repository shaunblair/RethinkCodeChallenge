# Rethink Code Challenge

## Notes
Application runs, with the ability to import csv file, view records, and update existing records.
*There is a small bug on the home screen when uploading. The data table row count and pagination will not be correct unless the user refreshes the page.*

## Highlights
- Angular 15
- .Net 7
- Sqlite (for ease of use, able to save the file in the project)
- Angular Datatables (ngx-datatable)
- Toastr for messages

## Future Improvements
- API should be separated out in service repository. Kept most functionality in the controller for ease of development, but that is not a best practice.
- Handle large DOM load. Paging and sorting should be done on the server.
- Fix bug with data table row count.
- Add tests.
- Get better visuals. NOT a strength of mine.

## Installation 
- Download project from github.
- In terminal, CD into web directory, run npm install to download required packages.
- CD into the API directory, and run dotnet restore from package manager console.
- Run dotnet ef database update to apply necessary migrations and create Sqlite database.
- [Note] You may need to run dotnet build or restart VS to get the SQLite database to attach.
- Run dotnet run to start the API server.
- CD back into web and run ng serve to start the application.
