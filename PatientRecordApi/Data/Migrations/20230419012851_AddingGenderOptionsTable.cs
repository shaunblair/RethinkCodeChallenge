using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PatientRecordApi.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddingGenderOptionsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_GenderOption_GenderId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GenderOption",
                table: "GenderOption");

            migrationBuilder.RenameTable(
                name: "GenderOption",
                newName: "GenderOptions");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GenderOptions",
                table: "GenderOptions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_GenderOptions_GenderId",
                table: "Patients",
                column: "GenderId",
                principalTable: "GenderOptions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_GenderOptions_GenderId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GenderOptions",
                table: "GenderOptions");

            migrationBuilder.RenameTable(
                name: "GenderOptions",
                newName: "GenderOption");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GenderOption",
                table: "GenderOption",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_GenderOption_GenderId",
                table: "Patients",
                column: "GenderId",
                principalTable: "GenderOption",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
