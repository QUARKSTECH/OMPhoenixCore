using Microsoft.EntityFrameworkCore.Migrations;

namespace OMPhoenix.API.Migrations
{
    public partial class AddedPublicIdJobCard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "JobCards",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "JobCards");
        }
    }
}
