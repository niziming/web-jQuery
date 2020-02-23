Vue.component("my-header", {
   template:"<div class=\"main-header\">\n" +
       "    <!-- Logo -->\n" +
       "    <a href=\"index2.html\" class=\"logo\">\n" +
       "      <!-- mini logo for sidebar mini 50x50 pixels -->\n" +
       "      <span class=\"logo-mini\"><b>A</b>LT</span>\n" +
       "      <!-- logo for regular state and mobile devices -->\n" +
       "      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n" +
       "    </a>\n" +
       "    <!-- Header Navbar: style can be found in header.less -->\n" +
       "    <nav class=\"navbar navbar-static-top\">\n" +
       "      <!-- Sidebar toggle button-->\n" +
       "      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n" +
       "        <span class=\"sr-only\">Toggle navigation</span>\n" +
       "      </a>\n" +
       "\n" +
       "      <div class=\"navbar-custom-menu\">\n" +
       "        <ul class=\"nav navbar-nav\">\n" +
       "          <!-- Messages: style can be found in dropdown.less-->\n" +
       "          <li class=\"dropdown messages-menu\">\n" +
       "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
       "              <i class=\"fa fa-envelope-o\"></i>\n" +
       "              <span class=\"label label-success\">4</span>\n" +
       "            </a>\n" +
       "            <ul class=\"dropdown-menu\">\n" +
       "              <li class=\"header\">You have 4 messages</li>\n" +
       "              <li>\n" +
       "                <!-- inner menu: contains the actual data -->\n" +
       "                <ul class=\"menu\">\n" +
       "                  <li><!-- start message -->\n" +
       "                    <a href=\"#\">\n" +
       "                      <div class=\"pull-left\">\n" +
       "                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "                      </div>\n" +
       "                      <h4>\n" +
       "                        Support Team\n" +
       "                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n" +
       "                      </h4>\n" +
       "                      <p>Why not buy a new awesome theme?</p>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <!-- end message -->\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <div class=\"pull-left\">\n" +
       "                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "                      </div>\n" +
       "                      <h4>\n" +
       "                        AdminLTE Design Team\n" +
       "                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n" +
       "                      </h4>\n" +
       "                      <p>Why not buy a new awesome theme?</p>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <div class=\"pull-left\">\n" +
       "                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "                      </div>\n" +
       "                      <h4>\n" +
       "                        Developers\n" +
       "                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n" +
       "                      </h4>\n" +
       "                      <p>Why not buy a new awesome theme?</p>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <div class=\"pull-left\">\n" +
       "                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "                      </div>\n" +
       "                      <h4>\n" +
       "                        Sales Department\n" +
       "                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n" +
       "                      </h4>\n" +
       "                      <p>Why not buy a new awesome theme?</p>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <div class=\"pull-left\">\n" +
       "                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "                      </div>\n" +
       "                      <h4>\n" +
       "                        Reviewers\n" +
       "                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n" +
       "                      </h4>\n" +
       "                      <p>Why not buy a new awesome theme?</p>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                </ul>\n" +
       "              </li>\n" +
       "              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n" +
       "            </ul>\n" +
       "          </li>\n" +
       "          <!-- Notifications: style can be found in dropdown.less -->\n" +
       "          <li class=\"dropdown notifications-menu\">\n" +
       "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
       "              <i class=\"fa fa-bell-o\"></i>\n" +
       "              <span class=\"label label-warning\">10</span>\n" +
       "            </a>\n" +
       "            <ul class=\"dropdown-menu\">\n" +
       "              <li class=\"header\">You have 10 notifications</li>\n" +
       "              <li>\n" +
       "                <!-- inner menu: contains the actual data -->\n" +
       "                <ul class=\"menu\">\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n" +
       "                      page and may cause design problems\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <li>\n" +
       "                    <a href=\"#\">\n" +
       "                      <i class=\"fa fa-user text-red\"></i> You changed your username\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                </ul>\n" +
       "              </li>\n" +
       "              <li class=\"footer\"><a href=\"#\">View all</a></li>\n" +
       "            </ul>\n" +
       "          </li>\n" +
       "          <!-- Tasks: style can be found in dropdown.less -->\n" +
       "          <li class=\"dropdown tasks-menu\">\n" +
       "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
       "              <i class=\"fa fa-flag-o\"></i>\n" +
       "              <span class=\"label label-danger\">9</span>\n" +
       "            </a>\n" +
       "            <ul class=\"dropdown-menu\">\n" +
       "              <li class=\"header\">You have 9 tasks</li>\n" +
       "              <li>\n" +
       "                <!-- inner menu: contains the actual data -->\n" +
       "                <ul class=\"menu\">\n" +
       "                  <li><!-- Task item -->\n" +
       "                    <a href=\"#\">\n" +
       "                      <h3>\n" +
       "                        Design some buttons\n" +
       "                        <small class=\"pull-right\">20%</small>\n" +
       "                      </h3>\n" +
       "                      <div class=\"progress xs\">\n" +
       "                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
       "                          <span class=\"sr-only\">20% Complete</span>\n" +
       "                        </div>\n" +
       "                      </div>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <!-- end task item -->\n" +
       "                  <li><!-- Task item -->\n" +
       "                    <a href=\"#\">\n" +
       "                      <h3>\n" +
       "                        Create a nice theme\n" +
       "                        <small class=\"pull-right\">40%</small>\n" +
       "                      </h3>\n" +
       "                      <div class=\"progress xs\">\n" +
       "                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
       "                          <span class=\"sr-only\">40% Complete</span>\n" +
       "                        </div>\n" +
       "                      </div>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <!-- end task item -->\n" +
       "                  <li><!-- Task item -->\n" +
       "                    <a href=\"#\">\n" +
       "                      <h3>\n" +
       "                        Some task I need to do\n" +
       "                        <small class=\"pull-right\">60%</small>\n" +
       "                      </h3>\n" +
       "                      <div class=\"progress xs\">\n" +
       "                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
       "                          <span class=\"sr-only\">60% Complete</span>\n" +
       "                        </div>\n" +
       "                      </div>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <!-- end task item -->\n" +
       "                  <li><!-- Task item -->\n" +
       "                    <a href=\"#\">\n" +
       "                      <h3>\n" +
       "                        Make beautiful transitions\n" +
       "                        <small class=\"pull-right\">80%</small>\n" +
       "                      </h3>\n" +
       "                      <div class=\"progress xs\">\n" +
       "                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
       "                          <span class=\"sr-only\">80% Complete</span>\n" +
       "                        </div>\n" +
       "                      </div>\n" +
       "                    </a>\n" +
       "                  </li>\n" +
       "                  <!-- end task item -->\n" +
       "                </ul>\n" +
       "              </li>\n" +
       "              <li class=\"footer\">\n" +
       "                <a href=\"#\">View all tasks</a>\n" +
       "              </li>\n" +
       "            </ul>\n" +
       "          </li>\n" +
       "          <!-- User Account: style can be found in dropdown.less -->\n" +
       "          <li class=\"dropdown user user-menu\">\n" +
       "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
       "              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n" +
       "              <span class=\"hidden-xs\">Alexander Pierce</span>\n" +
       "            </a>\n" +
       "            <ul class=\"dropdown-menu\">\n" +
       "              <!-- User image -->\n" +
       "              <li class=\"user-header\">\n" +
       "                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n" +
       "\n" +
       "                <p>\n" +
       "                  Alexander Pierce - Web Developer\n" +
       "                  <small>Member since Nov. 2012</small>\n" +
       "                </p>\n" +
       "              </li>\n" +
       "              <!-- Menu Body -->\n" +
       "              <li class=\"user-body\">\n" +
       "                <div class=\"row\">\n" +
       "                  <div class=\"col-xs-4 text-center\">\n" +
       "                    <a href=\"#\">Followers</a>\n" +
       "                  </div>\n" +
       "                  <div class=\"col-xs-4 text-center\">\n" +
       "                    <a href=\"#\">Sales</a>\n" +
       "                  </div>\n" +
       "                  <div class=\"col-xs-4 text-center\">\n" +
       "                    <a href=\"#\">Friends</a>\n" +
       "                  </div>\n" +
       "                </div>\n" +
       "                <!-- /.row -->\n" +
       "              </li>\n" +
       "              <!-- Menu Footer-->\n" +
       "              <li class=\"user-footer\">\n" +
       "                <div class=\"pull-left\">\n" +
       "                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n" +
       "                </div>\n" +
       "                <div class=\"pull-right\">\n" +
       "                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n" +
       "                </div>\n" +
       "              </li>\n" +
       "            </ul>\n" +
       "          </li>\n" +
       "          <!-- Control Sidebar Toggle Button -->\n" +
       "          <li>\n" +
       "            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n" +
       "          </li>\n" +
       "        </ul>\n" +
       "      </div>\n" +
       "    </nav>\n" +
       "  </div>"
});

new Vue({
    el:"#header"
});

