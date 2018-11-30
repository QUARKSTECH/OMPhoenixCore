using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OMPhoenix.API.Migrations
{
    public partial class UserMachineJobCardEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Machines",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ContactNumber = table.Column<int>(nullable: false),
                    MachineSerialNo = table.Column<string>(nullable: true),
                    MachineMake = table.Column<string>(nullable: true),
                    MachineModel = table.Column<string>(nullable: true),
                    LastService = table.Column<DateTime>(nullable: false),
                    LastServiceHours = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Machines", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Machines_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobCards",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    MachineId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobCards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobCards_Machines_MachineId",
                        column: x => x.MachineId,
                        principalTable: "Machines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobCards_MachineId",
                table: "JobCards",
                column: "MachineId");

            migrationBuilder.CreateIndex(
                name: "IX_Machines_UserId",
                table: "Machines",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobCards");

            migrationBuilder.DropTable(
                name: "Machines");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Users");
        }
    }
}
