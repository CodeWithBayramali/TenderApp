using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class OfferName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "OfferTenders",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "OfferTenders");
        }
    }
}
