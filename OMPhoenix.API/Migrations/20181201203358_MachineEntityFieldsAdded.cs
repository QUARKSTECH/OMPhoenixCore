using Microsoft.EntityFrameworkCore.Migrations;

namespace OMPhoenix.API.Migrations
{
    public partial class MachineEntityFieldsAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CurrentLoadingHours",
                table: "Machines",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrentRunningHours",
                table: "Machines",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentLoadingHours",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "CurrentRunningHours",
                table: "Machines");
        }
    }
}
